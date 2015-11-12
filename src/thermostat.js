// 'use strict'

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.maxTemp_PSM_On = 25;
  this.maxTemp_PSM_Off = 32;
}

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  };

  Thermostat.prototype.down = function() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  };

  Thermostat.prototype.resetTemp = function() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

  Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.isMaximumTemperature = function() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.maxTemp_PSM_Off;
    }
    return this.temperature === this.maxTemp_PSM_On;
  };

  Thermostat.prototype.isPowerSavingModeOn = function () {
    return this.powerSavingMode === true;
  };

  Thermostat.prototype.switchPowerSavingModeOff = function() {
    this.powerSavingMode = false;
  };

  Thermostat.prototype.switchPowerSavingModeOn = function() {
    this.powerSavingMode = true;
  };
