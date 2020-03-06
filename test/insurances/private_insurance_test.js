Feature('Private insurance page');

Scenario('Show introduction', (I) => {
  I.amOnPage('/insurances/private-insurance?version=5');
  I.see('가입부터 보험금신청까지 카톡으로 OK');
});

Scenario('Visit insurance page', (I) => {
  I.amOnPage('/?version=5');
  I.click('독일 주재원 보험');
  I.see('가입부터 보험금신청까지 카톡으로 OK');
});
