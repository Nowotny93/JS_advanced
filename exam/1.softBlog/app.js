function solve() {
  let addButton = document.querySelector('button');
  let creator = document.getElementById('creator');
  let title = document.getElementById('title')
  let category = document.getElementById('category');
  let content = document.getElementById('content');
  let posts = document.getElementById('posts')

  addButton.addEventListener('click', createPost);

  function createPost() {


    if (content.value.trim()) {

      let archiveButton = document.createElement('button');
      archiveButton.setAttribute('class', 'archiveButton');
      archiveButton.textContent = 'Archive';

      let deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'discardButton');
      deleteButton.textContent = 'Delete';

      let titleContent = document.createElement('h1');
      titleContent.setAttribute('class', 'titleContent');
      titleContent.textContent = title.value;

      let categoryContent = document.createElement('p')
      categoryContent.setAttribute('text', 'category')
      categoryContent.textContent = `Category: ${category.value}`

      let authorContent = document.createElement('p')
      authorContent.textContent = 'Author:'

      let strong = document.createElement('strong')
      strong.textContent = creator.value
      authorContent.appendChild(strong)

      let item = document.createElement('li');
      item.setAttribute('class', 'content');
      item.textContent = content.value;

      let container = document.createElement('div')


      container.appendChild(titleContent)
      container.appendChild(categoryContent)
      container.appendChild(authorContent)
      container.appendChild(item);
      container.appendChild(archiveButton);
      container.appendChild(deleteButton);
      posts.appendChild(container)

      content.value = null
      title.value = null
      category.value = null
      creator.value = null

      deleteButton.addEventListener('click', function () {
        posts.removeChild(container)
      })

      archiveButton.addEventListener('click', function(e) {

           e.preventDefault()
            let archives = document.querySelector('.archive-section')
            let archivesli = document.createElement('ol')

            archivesli.appendChild(titleContent);
            posts.removeChild(container);
            archives.appendChild(archivesli);

            let allArchivesli = Array.from(archives.querySelectorAll('ol'))

            allArchivesli.sort((a,b)=>a.textContent.localeCompare(b.textContent))

            for (element of allArchivesli){

            archives.appendChild(element)
            }
      })
    }
  }
}
