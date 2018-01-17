import { Selector } from 'testcafe';

fixture('Egghead.io')
  .page('http://egghead.io');

test('Ensure that the title is correct', async t => {
  await t
    .expect(Selector('title').innerText)
    .eql('Short, instructional screencast video tutorials for web developers on @eggheadio');
});
