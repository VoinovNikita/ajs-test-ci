// eslint-disable-next-line import/prefer-default-export
export default function hero(character) {
  if (character.health >= 50) {
    return 'healthy';
  }
  if (character.health >= 15) {
    return 'wounded';
  }
  if (character.health <= 14) {
    return 'critical';
  }
  return hero();
}
