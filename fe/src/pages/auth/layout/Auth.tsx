const CLIENT_ID = "878887191353384991";

export default function AuthLayout() {
  console.log("### AuthLayout ###");

  const oauthDiscord = () => {
    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&redirect_uri=http%3A%2F%2Flocalhost%3A55000%2Fsign-in&state=ff14-party-helper-1629624950025&prompt=consent&response_type=code`;
  }

  return (
    <>
      <div className="app-layout">
        <div className="app-content">
          <div className="app-sign-in">
            <div className="main-door">
              <div>Final Fantasy XIV</div>
              <div>PARTY HELPER</div>
            </div>
            <button
              className="sign-in-with-discord"
              onClick={() => oauthDiscord()}>
                디스코드로 로그인하기
            </button>
          </div>
        </div>
        <div className="app-footer">
          ⓒ Randel, All Rights Reserved
        </div>
      </div>
    </>
  );
}