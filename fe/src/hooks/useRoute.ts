import qs from "qs";
import { useHistory, useLocation } from "react-router-dom";

export interface Query {
  [key: string]: string | number;
}

export function useRoute() {
  const location = useLocation();
  const history = useHistory();
  const query = qs.parse(location.search.slice(1));

  const pushPath = (path: string, params?: Query) => {
    if (params) {
      Object.keys(params).forEach((k) => {
        query[k] = String(params[k]);
      });

      history.push(path + "?" + qs.stringify(query));
      return;
    }
    history.push(path);
  };

  const replacePath = (path: string) => {
    history.replace(path);
  };

  const pushBack = (path?: string) => {
    if (history.length > 2) {
      history.goBack();
    } else {
      history.push(path || "/");
    }
  };

  const pushQuery = (params: Query) => {
    Object.keys(params).forEach((k) => {
      query[k] = String(params[k]);
    });

    history.push(location.pathname + "?" + qs.stringify(query));
  };

  const removeQuery = (key: string) => {
    delete query[key];
    pushQuery({});
  };

  const replaceQuery = (params: Query) => {
    Object.keys(query).forEach((k) => {
      delete query[k];
    });

    Object.keys(params).forEach((k) => {
      query[k] = String(params[k]);
    });

    history.replace(location.pathname + "?" + qs.stringify(query));
  };

  return {
    location,
    history,
    pushBack,
    pushPath,
    pushQuery,
    removeQuery,
    replaceQuery,
    replacePath,
    query,
  };
}

export function useIntParam(val: string | number, allowNull?: boolean): number | null {
  const history = useHistory();

  if (!val && allowNull) return null;

  try {
    const v = parseInt(String(val), 10);

    if (isNaN(v)) throw new Error(":)");

    return v;
  } catch {
    history.replace(`/404?iv=${encodeURIComponent(String(val))}`);

    return 0;
  }
}

export function useBigIntParam(val: string | bigint): bigint {
  const history = useHistory();

  try {
    return BigInt(val);
  } catch {
    history.replace(`/404?bi=${encodeURIComponent(String(val))}`);

    return BigInt(0);
  }
}
