// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  console.log("WITH_NEW_LINE >> ", process.env.WITH_NEW_LINE)
  res.json({ name: process.env.WITH_NEW_LINE })
}
