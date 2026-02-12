const dynamicDemand = {

    init() {
        window.SubwayBuilderAPI.cities.setCityDataFiles('BAL', {
            demandData: '/data/test_demand.json'
        });
        console.log("=== Set BAL custom demand data file");

        window.SubwayBuilderAPI.hooks.onMapReady(async () => {
            console.log('=== Map ready');
            const demand = await fetch('/data/test_demand.json').then((r) => r.json());
        });
    }
};

dynamicDemand.init();

