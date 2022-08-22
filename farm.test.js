const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm.js");

describe("getYieldForPlant", () => {
  test("Get yield for plant with low sun", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
    };

    const input = {
      crop: corn,
      environment: environmentFactors,
    };
    expect(getYieldForPlant(input)).toBe(15);
  });

  test("Get yield for plant with medium sun", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "medium",
    };

    const input = {
      crop: corn,
      environment: environmentFactors,
    };
    expect(getYieldForPlant(input)).toBe(30);
  });

  test("Get yield for plant with high sun", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "high",
    };

    const input = {
      crop: corn,
      environment: environmentFactors,
    };
    expect(getYieldForPlant(input)).toBe(45);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop with low sun", () => {
    const corn = {
      name: "corn",
      yield: 5,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
    };

    const input = {
      crop: corn,
      numCrops: 10,
      environment: environmentFactors,
    };

    expect(getYieldForCrop(input)).toBe(25);
  });

  test("Get yield for crop with medium sun", () => {
    const corn = {
      name: "corn",
      yield: 5,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "medium",
    };

    const input = {
      crop: corn,
      numCrops: 10,
      environment: environmentFactors,
    };

    expect(getYieldForCrop(input)).toBe(50);
  });

  test("Get yield for crop with medium sun", () => {
    const corn = {
      name: "corn",
      yield: 5,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "high",
    };

    const input = {
      crop: corn,
      numCrops: 10,
      environment: environmentFactors,
    };

    expect(getYieldForCrop(input)).toBe(75);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops in low sun", () => {
    const corn = {
      name: "corn",
      yield: 6,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
    };

    const crops = [
      { crop: corn, numCrops: 5, environment: environmentFactors },
      { crop: pumpkin, numCrops: 2, environment: environmentFactors },
    ];
    expect(getTotalYield(crops)).toBe(19);
  });

  test("Calculate total yield with multiple crops in medium sun", () => {
    const corn = {
      name: "corn",
      yield: 6,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "medium",
    };

    const crops = [
      { crop: corn, numCrops: 5, environment: environmentFactors },
      { crop: pumpkin, numCrops: 2, environment: environmentFactors },
    ];
    expect(getTotalYield(crops)).toBe(38);
  });

  test("Calculate total yield with multiple crops in high sun", () => {
    const corn = {
      name: "corn",
      yield: 6,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "high",
    };

    const crops = [
      { crop: corn, numCrops: 5, environment: environmentFactors },
      { crop: pumpkin, numCrops: 2, environment: environmentFactors },
    ];
    expect(getTotalYield(crops)).toBe(57);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
    };

    const crops = [
      { crop: corn, numCrops: 0, environment: environmentFactors },
    ];
    expect(getTotalYield(crops)).toBe(0);
  });
});

describe("getCostsForCrop", () => {
  const corn = {
    name: "corn",
    cost: 2,
  };
  const input = {
    crop: corn,
    numPlants: 5,
  };

  test("Get the total cost for crop", () => {
    expect(getCostsForCrop(input)).toBe(10);
  });
});

describe("getRevenueForCrop", () => {
  test("Get the revenue for crop with low sun", () => {
    const corn = {
      name: "corn",
      yield: 4,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
    };

    const input = {
      crop: corn,
      environment: environmentFactors,
      numCrops: 5,
      salePrice: 3,
    };
    expect(getRevenueForCrop(input)).toBe(30);
  });

  test("Get the revenue for crop with medium sun", () => {
    const corn = {
      name: "corn",
      yield: 4,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "medium",
    };

    const input = {
      crop: corn,
      environment: environmentFactors,
      numCrops: 5,
      salePrice: 3,
    };
    expect(getRevenueForCrop(input)).toBe(60);
  });

  test("Get the revenue for crop with high sun", () => {
    const corn = {
      name: "corn",
      yield: 4,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "high",
    };

    const input = {
      crop: corn,
      environment: environmentFactors,
      numCrops: 5,
      salePrice: 3,
    };
    expect(getRevenueForCrop(input)).toBe(90);
  });
});

describe("GetProfitForCrop", () => {
  test("Get the profits for crop with low sun", () => {
    const corn = {
      name: "corn",
      yield: 4,
      cost: 2,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
    };

    const input = {
      crop: corn,
      environment: environmentFactors,
      numCrops: 5,
      salePrice: 3,
    };
    expect(getProfitForCrop(input)).toBe(10);
  });

  test("Get the profits for crop with medium sun", () => {
    const corn = {
      name: "corn",
      yield: 4,
      cost: 2,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "medium",
    };

    const input = {
      crop: corn,
      environment: environmentFactors,
      numCrops: 5,
      salePrice: 3,
    };
    expect(getProfitForCrop(input)).toBe(20);
  });

  test("Get the profits for crop with high sun", () => {
    const corn = {
      name: "corn",
      yield: 4,
      cost: 2,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "high",
    };

    const input = {
      crop: corn,
      environment: environmentFactors,
      numCrops: 5,
      salePrice: 3,
    };
    expect(getProfitForCrop(input)).toBe(30);
  });
});

describe("GetTotalProfit", () => {
  test("Get the total profit with multiple crops with low sun", () => {
    const corn = {
      name: "corn",
      yield: 4,
      cost: 2,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      cost: 3,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };
    const environmentFactors = {
      sun: "low",
    };

    const crops = [
      {
        crop: corn,
        numCrops: 5,
        environment: environmentFactors,
        salePrice: 3,
      },
      {
        crop: pumpkin,
        numCrops: 2,
        environment: environmentFactors,
        salePrice: 4,
      },
    ];
    expect(getTotalProfit(crops)).toBe(14);
  });

  test("Get the total profit with multiple crops with medium sun", () => {
    const corn = {
      name: "corn",
      yield: 4,
      cost: 2,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      cost: 3,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };
    const environmentFactors = {
      sun: "medium",
    };

    const crops = [
      {
        crop: corn,
        numCrops: 5,
        environment: environmentFactors,
        salePrice: 3,
      },
      {
        crop: pumpkin,
        numCrops: 2,
        environment: environmentFactors,
        salePrice: 4,
      },
    ];
    expect(getTotalProfit(crops)).toBe(28);
  });

  test("Get the total profit with multiple crops with medium sun", () => {
    const corn = {
      name: "corn",
      yield: 4,
      cost: 2,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      cost: 3,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };
    const environmentFactors = {
      sun: "high",
    };

    const crops = [
      {
        crop: corn,
        numCrops: 5,
        environment: environmentFactors,
        salePrice: 3,
      },
      {
        crop: pumpkin,
        numCrops: 2,
        environment: environmentFactors,
        salePrice: 4,
      },
    ];
    expect(getTotalProfit(crops)).toBe(42);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 2,
      factor: {
        sun: {
          low: 0.5,
          medium: 0,
          high: 1.5,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
    };

    const crops = [
      {
        crop: corn,
        numCrops: 0,
        salePrice: 3,
        environment: environmentFactors,
      },
    ];
    expect(getTotalProfit(crops)).toBe(0);
  });
});
