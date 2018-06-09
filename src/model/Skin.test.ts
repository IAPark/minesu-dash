import Skin from './Skin';


it('grabs a skin from uuid', () => {
  const skin = Skin.fromUUID("d8a8121b-3fd3-4836-b553-f83d2b121ac5");
  expect(typeof skin.faceUrl).toBe('string');
});
