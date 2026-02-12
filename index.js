const dynamicDemand = {

    init() {
        window.SubwayBuilderAPI.cities.setCityDataFiles('BAL', {
            demandData: '/data/test_demand.json'
        });
        console.log("=== Set BAL custom demand data file");

        window.SubwayBuilderAPI.hooks.onMapReady(async () => {
            console.log('=== Map ready');
            const demand = await fetch('/data/test_demand.json').then((r) => r.json());
            
            const results = {
                demand: schemas.DemandDataSchema.safeParse(demand),
            };
            
            Object.entries(results).forEach(([name, result]) => {
                if (!result.success) {
                    console.error(`❌ ${name} validation failed:`, result.error.errors);
                } else {
                    console.log(`✅ ${name} is valid`);
                }
            });
        });
    }
};

dynamicDemand.init();

