import "dotenv/config";

export default ({ config }: any) => {
  return {
    ...config,
    extra: {
      autoWebBaseUrl: process.env.AUTOWEB_BASE_URL,
      AUTOWEB_USUARIO: process.env.AUTOWEB_USUARIO,
      AUTOWEB_API_SENHA: process.env.AUTOWEB_API_SENHA,
    },
  };
};
