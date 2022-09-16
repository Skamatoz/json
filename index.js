
fetch('https://api.tonhold.com/getTransactions?address=EQC14-L4aHi7aUqmBkBUXdRK-4Z2jb8niyprgotSgibUt7A5&limit=1&to_lt=0&archival=false')

  .then(response => response.json())
  .then(data => console.log(data))
