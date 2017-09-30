function getPosts() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(9999);
    } , 3000);
  });
}
  
async function go() {
  const posts = await getPosts();
  console.log(posts);
};
go();