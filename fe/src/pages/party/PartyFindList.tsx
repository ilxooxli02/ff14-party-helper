import { Duty } from "ff14-party-helper-lib/dist/consts/duty";

function DutyIcon(props: {type: Duty}) {
  return <div className={`duty-type-${props.type.toLocaleLowerCase()}`} />
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

  return (
    <>
      {/* Categories */}
      <div className="duties-wrapper">
        { duties.sort((a, b) => a.order - b.order).map((duty, index) => 
          <div key={`${duty.type}-${index}`} className="duty-container">
            <DutyIcon  type={duty.type} />
            <span className="duty-count">1</span>
          </div>)
        }
      </div>
      {/* Parties */}
      <div>
        파티 찾기 게시글 영역
      </div>
    </>
  );
}