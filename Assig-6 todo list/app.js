const inp = document.querySelector('input');
const list = document.getElementById('list');
const btn=document.getElementById('add')

btn.addEventListener('click', (e) => {
        const todoText = inp.value;
        
        if(todoText==""){
            alert("Please write something");
        }

        else{
        const li = document.createElement('li');
         li.classList.add("lis");
        li.innerHTML = todoText;
            
       
        const deleteBTn=document.createElement('button');
        deleteBTn.innerHTML='<i class="fas fa-trash-alt"></i>';
        deleteBTn.classList.add("btn");

        const updateBTn=document.createElement('button');
        updateBTn.innerHTML='<i class="fas fa-edit"></i>';
        updateBTn.classList.add("btn");

        const upBTn=document.createElement('button');
        upBTn.innerHTML='<i class="fas fa-angle-double-up"></i>';
        upBTn.classList.add("btn");

        const downBTn=document.createElement('button');
        downBTn.innerHTML='<i class="fas fa-angle-double-down"></i>';
        downBTn.classList.add("btn");

        deleteBTn.addEventListener('click', () => {
            li.remove();
        })

        upBTn.addEventListener('click',(e)=>{
    
                var next= e.target.closest('ul');
                var task = e.target.closest('li');
                var prev = e.target.closest('li').previousSibling;
                if(typeof(prev)!=='undefined' && prev!==null){
                  next.insertBefore(task, prev);
                }
            })
            downBTn.addEventListener('click',(e)=>{
    
                var nex= e.target.closest('ul');
                var tas = e.target.closest('li');
                var pre = e.target.closest('li').nextSibling;
                if(typeof(pre)!=='undefined' && pre!==null){
                  nex.insertBefore(pre, tas);
                }
            })
        updateBTn.addEventListener('click', function() {
            let listItem = this.parentNode;
            let editMode = document.createElement("input");
            listItem.parentNode.replaceChild(editMode, listItem);
            editMode.classList.add("input");
            editMode.setAttribute("type", "text");
            editMode.value=listItem.textContent;
            editMode.addEventListener('keypress', (e)=>{
                if(e.keyCode===13){
                    listItem.textContent=editMode.value;
                    editMode.parentNode.replaceChild(listItem, editMode);
                }
                li.append(deleteBTn);
                li.append(updateBTn);
                li.append(upBTn);
                li.append(downBTn);
            })
        })



        list.append(li);
        li.append(deleteBTn);
        li.append(updateBTn);
        li.append(upBTn);
        li.append(downBTn);

        inp.value = "";
    }
})