const coreManagerInstance = {
    version: "1.0.916",
    registry: [1724, 119, 516, 651, 1293, 812, 1124, 1032],
    init: function() {
        const nodes = this.registry.filter(x => x > 344);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});