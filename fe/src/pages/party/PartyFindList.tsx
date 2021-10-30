import { Fragment } from "react";
import { Duties, Duty, Role } from "ff14-party-helper-lib/dist/consts";

interface DutyIconProps { 
  type: Duty, 
  size?: "small" | "medium" | "large", 
  clickable?: boolean
};

function DutyTypeIcon(props: DutyIconProps) {
  return <div className={`duty-type-${props.type.toLocaleLowerCase()} --${props.size || "small"} ${props.clickable ? "--clickable" : ""}`} />
}

export default function PartyFindList() {
  const duties = [
    { type: Duty.ALL, order: 0 },
    { type: Duty.Roulette, order: 1 },
    { type: Duty.Dungeon, order: 2 },
    { type: Duty.Guildhest, order: 3 },
    { type: Duty.Trial, order: 4 },
    { type: Duty.Raid, order: 5 },
    { type: Duty.HighEndDuties, order: 6 },
    { type: Duty.PvP, order: 7 },
    { type: Duty.QuestBattle, order: 8 },
    { type: Duty.Fate, order: 9 },
    { type: Duty.TreasureHunt, order: 10 },
    { type: Duty.Hunt, order: 11 },
    { type: Duty.DisciplesOfTheLand, order: 12 },
    { type: Duty.PalaceOfTheDead, order: 13 },
    { type: Duty.Eureka, order: 14 },
    { type: Duty.Etc, order: 15 }
  ];

  const partiesMock = [
    {
      type: Duty.Dungeon,
      duty: Duties.Dungeon.Paglthan.ko,
      desc: "모집 설명이 들어가는 부분 모집 설명이 들어가는 부분 모집 설명이 들어가는 부분 모집 설명이 들어가는 부분 모집 설명이 들어가는 부분 모집 설명이 들어가는 부분 모집 설명이 들어가는 부분 모집 설명이 들어가는 부분 모집 설명이 들어가는 부분",
      members: [
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
      ]
    },
    {
      type: Duty.Dungeon,
      duty: Duties.Dungeon.Paglthan.ko,
      desc: "모집 설명이 들어가는 부분",
      members: [
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
      ]
    },
    {
      type: Duty.Dungeon,
      duty: Duties.Dungeon.Paglthan.ko,
      desc: "모집 설명이 들어가는 부분",
      members: [
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
      ]
    },
    {
      type: Duty.Dungeon,
      duty: Duties.Dungeon.Paglthan.ko,
      desc: "모집 설명이 들어가는 부분",
      members: [
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
      ]
    },
    {
      type: Duty.Dungeon,
      duty: Duties.Dungeon.Paglthan.ko,
      desc: "모집 설명이 들어가는 부분",
      members: [
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
      ]
    },
    {
      type: Duty.Dungeon,
      duty: Duties.Dungeon.Paglthan.ko,
      desc: "모집 설명이 들어가는 부분",
      members: [
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
      ]
    },
    {
      type: Duty.Dungeon,
      duty: Duties.Dungeon.Paglthan.ko,
      desc: "모집 설명이 들어가는 부분",
      members: [
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
      ]
    },
    {
      type: Duty.Dungeon,
      duty: Duties.Dungeon.Paglthan.ko,
      desc: "모집 설명이 들어가는 부분",
      members: [
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
      ]
    },
    {
      type: Duty.Dungeon,
      duty: Duties.Dungeon.Paglthan.ko,
      desc: "모집 설명이 들어가는 부분",
      members: [
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Tanker,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Healer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
        {
          type: Role.Dealer,
          isExist: false,
        },
      ]
    }
  ]

  return (
    <>
      {/* Search Options */}
      <div className="duties-search-option-wrapper">
        {/* TODO... */}
        <div className="detail-search-button" />
      </div>
      {/* Categories */}
      <div className="duties-wrapper">
        { duties.sort((a, b) => a.order - b.order).map((duty, index) => 
          <div key={`${duty.type}-${index}`} className="duty-container">
            <DutyTypeIcon type={duty.type} size="small" clickable={true} />
            <span className="duty-count">1</span>
          </div>)
        }
      </div>
      {/* Parties */}
      <div className="parties-wrapper">
        <table className="parties">
          <thead>
            <tr>
              <th></th>
              <th>임무</th>
              <th>모집 역할</th>
            </tr>
          </thead>
          <tbody>
            { 
              partiesMock.map((party, index) => 
                <Fragment key={index}>
                  <tr className="party">
                    <td rowSpan={2} className="party-duty">
                      <DutyTypeIcon type={party.type} size="medium" />
                    </td>
                    <td className="party-desc">
                      <div className="party-desc-wrapper">
                        <div className="party-title">{party.duty}</div>
                      </div>
                    </td>
                    <td className="party-members">
                      { 
                        party.members?.map((member, mIndex) =>
                          <div key={`${index}-${mIndex}`} className={`role-${member.type.toLocaleLowerCase()}`}></div>
                        )
                      }
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <span className="party-desc-text">{party.desc}</span>
                    </td>
                  </tr>
                </Fragment>
              )
            }
          </tbody>
        </table>
      </div>
      {/* Paginatable */}
      <div className="parties-paginatable">
        <div className="left" />
        <div className="right" />
        <div className="current-item-range">
          <span>1 - 10</span>
        </div>
      </div>
      {/* Party Buttons */}
      <div className="party-buttons">
        <div className="party-register-button" onClick={() => console.log("clicked")}>파티 모집 등록</div>
        <div className="parties-status-wrapper">
          <div className="parties-refresh-button">&#8635;</div>
          <div className="parties-count-info">10(123)</div>
        </div>
      </div>
    </>
  );
}