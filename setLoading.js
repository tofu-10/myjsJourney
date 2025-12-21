async function checkLoading() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  data.forEach((element) => {
    console.log(`name= ${element.name}`);
  });
}

// Wrap in async IIFE to use await
(async () => {
  let loading = true;
  try {
    if (loading) {
      console.log("loading....");
    }
    await checkLoading();
    loading = false;
    console.log("Data loaded successfully");
  } catch (e) {
    console.log("Data cannot be loaded:", e.message);
  } finally {
    loading = false;
  }
})();
