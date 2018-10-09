import express from 'express';
import MongoClient from 'mongodb';
// const MongoClient = require('mongodb').MongoClient;

const router = express.Router();

async function loadMicroPostsCollection() {
  const client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true });
  return client.db('micro-blog').collection('micro-posts');
}
// retrieve latest micro-posts
router.get('/', async (req, res) => {
  const collection = await loadMicroPostsCollection();
  res.send(
    await collection.find({}).toArray(),
  );
});

// insert a new micro-post
router.post('/', async (req, res) => {
  const collection = await loadMicroPostsCollection();
  await collection.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  });
  res.status(200).send();
});

export default router;
