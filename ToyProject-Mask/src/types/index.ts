export type IComponentProps = {
  children?: JSX.Element[] | JSX.Element | string | number;
  className?: string;
};

// 0:
// time: "코로나바이러스감염증-19 국내 발생 현황(3.8일 00시 기준)"
// 확진환자: "7,134 명"
// 확진환자 격리해제: "130 명"
// 사망자: "50 명"
// 검사진행: "19,376 명"
type TCoronaData = {
  time: string,
  ingPatient: string,
  edPatient: string,
  deadPatient: string,
  checkPatient: string
};

export { TCoronaData }