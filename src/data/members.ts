import members from "./members.json";

export type Member = {
  displayName: string;
  link: string | null;
  image: string | null;
};

/**
 * 名前からゼミ生の情報を取得する
 * @param name - ゼミ生の名前(大文字小文字や前後の空白は無視する)
 * @returns ゼミ生の情報。名前が空の場合はundefined
 * @throws 名前がmembers.jsonに登録されていない場合
 */
export function getMember(name: unknown): Member | undefined {
  const normalizedName = String(name ?? "")
    .trim()
    .toLowerCase();
  if (!normalizedName) return undefined;

  const member: Member | undefined =
    members[normalizedName as keyof typeof members];
  if (!member) {
    throw new Error(`Unknown member: ${name}`);
  }
  return member;
}
