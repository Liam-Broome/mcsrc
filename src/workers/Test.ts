export const TestWorker = new ComlinkWorker<typeof import("./TestWorker")>(
    new URL("./TestWorker", import.meta.url),
    {
    }
);
const result = await TestWorker.add(2, 3);

console.log("2 + 3 =", result); // Should log: 2 + 3 = 5