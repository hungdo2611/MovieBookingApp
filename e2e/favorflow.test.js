describe('FavorFlow', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
  
  
    it('should display film list and show title & description & btn like', async () => {
      await expect(element(by.id('listFilm'))).toBeVisible(); 
      await expect(element(by.id('title0'))).toBeVisible(); 
      await expect(element(by.id('des0'))).toBeVisible(); 
      await expect(element(by.id('btnLike0'))).toBeVisible(); 


      
    });
    it('click like => navigate favorite screen => list favourtie', async () => {
      await element(by.id('btnLike0')).tap();
      await element(by.id('tab_favor')).tap();
      await expect(element(by.id('list_favor'))).toBeVisible();
  
    });
   
  });
  