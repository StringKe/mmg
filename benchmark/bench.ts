import b from 'benny'

async function run() {
  await b.suite('parser 100', b.cycle(), b.complete())
}

run().catch((e) => {
  console.error(e)
})
