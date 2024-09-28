describe('Book', () => {
  beforeAll(async () => {
    await device.launchApp();
  });



  it('should display film list and show title & description', async () => {
    await expect(element(by.id('listFilm'))).toBeVisible(); 
    await expect(element(by.id('title0'))).toBeVisible(); 
    await expect(element(by.id('des0'))).toBeVisible(); 

  });
  it('click book => navigate booking => enter book btn => list booked', async () => {
    await element(by.id('bookFilmButton0')).tap();
    await expect(element(by.id('bookingScreen'))).toBeVisible();
    await element(by.id('btn_book')).tap();
    await expect(element(by.id('list_booked'))).toBeVisible();
 


  });
 
});
