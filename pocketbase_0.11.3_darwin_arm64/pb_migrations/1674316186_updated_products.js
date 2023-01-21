migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t2pspzenlqn45g")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t2pspzenlqn45g")

  collection.createRule = null

  return dao.saveCollection(collection)
})
