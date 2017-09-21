const config = {
  mongoURL: process.env.MONGO_URL || "mongodb://adminmern:p@55word@cluster0-shard-00-00-ekge8.mongodb.net:27017,cluster0-shard-00-01-ekge8.mongodb.net:27017,cluster0-shard-00-02-ekge8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin",
  port: process.env.PORT || 8000,
};

export default config;
