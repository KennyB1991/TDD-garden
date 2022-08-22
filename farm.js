const getYieldForPlant = (plant) => {
  const sunPower = plant.environment.sun;
  const cropSunFactor = plant.crop.factor.sun;
  switch (sunPower) {
    case "low":
      return plant.crop.yield * cropSunFactor.low;
    case "medium":
      return plant.crop.yield;
    case "high":
      return plant.crop.yield * cropSunFactor.high;
  }
};

const getYieldForCrop = (crop) => {
  const cropType = crop.crop;
  const sunPower = crop.environment.sun;
  const cropSunFactor = crop.crop.factor.sun;
  switch (sunPower) {
    case "low":
      return cropType.yield * crop.numCrops * cropSunFactor.low;
    case "medium":
      return cropType.yield * crop.numCrops;
    case "high":
      return cropType.yield * crop.numCrops * cropSunFactor.high;
  }
};

const getTotalYield = (crops) => {
  const totalYield = [];

  for (i = 0; i < crops.length; i++) {
    if (crops.numCrops !== 0) {
      const sunPower = crops[i].environment.sun;
      const cropSunFactor = crops[i].crop.factor.sun;
      switch (sunPower) {
        case "low":
          totalYield[i] =
            crops[i].crop.yield * cropSunFactor.low * crops[i].numCrops;
          break;
        case "medium":
          totalYield[i] = crops[i].crop.yield * crops[i].numCrops;
          break;
        case "high":
          totalYield[i] =
            crops[i].crop.yield * cropSunFactor.high * crops[i].numCrops;
          break;
      }
    } else {
      return 0;
    }
  }

  return totalYield.reduce((prevVal, curVal) => {
    return prevVal + curVal;
  });
};

const getCostsForCrop = (crop) => {
  const cropType = crop.crop;

  return cropType.cost * crop.numPlants;
};

const getRevenueForCrop = (crop) => {
  const cropType = crop.crop;
  const sunPower = crop.environment.sun;
  const cropSunFactor = crop.crop.factor.sun;
  switch (sunPower) {
    case "low":
      return (
        cropType.yield * cropSunFactor.low * crop.numCrops * crop.salePrice
      );
    case "medium":
      return cropType.yield * crop.numCrops * crop.salePrice;
    case "high":
      return (
        cropType.yield * cropSunFactor.high * crop.numCrops * crop.salePrice
      );
  }
};

const getProfitForCrop = (crop) => {
  const cropType = crop.crop;
  const sunPower = crop.environment.sun;
  const cropSunFactor = crop.crop.factor.sun;
  let cropYield = 0;
  switch (sunPower) {
    case "low":
      cropYield = cropType.yield * cropSunFactor.low * crop.numCrops;
      break;
    case "medium":
      cropYield = cropType.yield * crop.numCrops;
      break;
    case "high":
      cropYield = cropType.yield * cropSunFactor.high * crop.numCrops;
      break;
  }

  const cropCost = cropYield * cropType.cost;
  const cropRevenue = cropYield * crop.salePrice;

  return cropRevenue - cropCost;
};

const getTotalProfit = (crops) => {
  const totalProfit = [];

  for (i = 0; i < crops.length; i++) {
    if (crops.numCrops !== 0) {
      const sunPower = crops[i].environment.sun;
      const cropSunFactor = crops[i].crop.factor.sun;
      let totalYield = 0;
      switch (sunPower) {
        case "low":
          totalYield =
            crops[i].crop.yield * cropSunFactor.low * crops[i].numCrops;
          break;
        case "medium":
          totalYield = crops[i].crop.yield * crops[i].numCrops;
          break;
        case "high":
          totalYield =
            crops[i].crop.yield * cropSunFactor.high * crops[i].numCrops;
          break;
      }
      const cropCost = totalYield * crops[i].crop.cost;
      const cropRevenue = totalYield * crops[i].salePrice;

      totalProfit[i] = cropRevenue - cropCost;
    } else {
      return 0;
    }
  }

  return totalProfit.reduce((prevVal, curVal) => {
    return prevVal + curVal;
  });
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
