describe('Thermostat', function() {

  // 'use strict';

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('allows to change temperatures:', function() {
    it('increases temperaturature by 1 with up button', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases temperature by 1 with down button',function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('resets temperature to 20 when reset button pressed', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
      for (var i = 0; i < 5; i++) {thermostat.up();}
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('has power saving switch:', function() {
    it('has power saving mode on by default', function () {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch power saving mode off',function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can switch power saving mode back on', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('has minimum and maximum temperatures:', function() {
    it('has temperaturature starting at 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('has a minimum temperature of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {thermostat.down();}
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('has a maximum temperature of 25 when power saving mode is on', function() {
      thermostat.switchPowerSavingModeOn();
      for (var i = 0; i < 26; i++) {thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('has a maximum temperature of 32 when power saving mode is on', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 33; i++) {thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });
});
