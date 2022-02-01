module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61527fccfe30b6d83a56470e8be12a15'),
  },
});
