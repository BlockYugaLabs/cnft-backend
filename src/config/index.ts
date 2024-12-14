
const config: {
    PORT: number,
    JWT_SECRET: string,
    RPC_URL: string
} = {
    PORT: Number(process.env.PORT) || 3000,
    JWT_SECRET: String(process.env.JWT_SECRET),
    RPC_URL: process.env.RPC_URL || "Default"
};
export default config;