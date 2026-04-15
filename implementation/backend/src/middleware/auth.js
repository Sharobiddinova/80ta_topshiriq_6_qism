function authMiddleware(req, _res, next) {
  // Demo auth: real loyihada JWT + wallet signature ishlatiladi.
  req.user = {
    wallet: req.headers["x-user-wallet"] || "0x0000000000000000000000000000000000000000",
    role: req.headers["x-user-role"] || "guest"
  };

  next();
}

module.exports = { authMiddleware };
