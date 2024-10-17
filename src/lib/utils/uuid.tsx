import generateRandomHex from '@/lib/utils/random-hex';

export default function getUUID() {
  const version: string = "4";
  const chars: string = '0123456789abcdef';
  const variant: string = 'ab89';
  const uuid: string = `${generateRandomHex(8, chars)}-${generateRandomHex(4, chars)}-${version}${generateRandomHex(3, chars)}-${generateRandomHex(1, variant)}${generateRandomHex(3, chars)}-${generateRandomHex(12, chars)}`;

  console.log(uuid);

  return uuid;
}