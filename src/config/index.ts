
const config: {
    PORT: Number,
    JWT_SECRET: String
} = {
    PORT: Number(process.env.PORT) || 3000,
    JWT_SECRET: String(process.env.JWT_SECRET)
};
export default config;