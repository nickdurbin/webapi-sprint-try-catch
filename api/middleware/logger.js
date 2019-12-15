module.exports = (req, res, next) => {
  console.log(`[
    ${new Date.now().toISOString()}] ${req.method} from ${req.path} to ${req.url}`)
    next()
};