import React, {useMemo, useRef, useState} from "react";
import './styles/App.css';
import Postlist from "./components/postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS',body: 'фыаф'},
        {id: 2, title: 'JS 1',body: 'фыаф 1'},
        {id: 3, title: 'JS 2',body: 'фыаф 2'},
    ])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [searchQuery, setSearchQuery] = useState(['']

    )
    const [selectedSort, setSelectedSort] = useState('')

    const sortedPosts = useMemo(() =>{
        console.log('ФУНКЦИЯ GETSORTEDPOSTS РАБОТАЕТ')
        if (selectedSort)
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        else
            return posts;
    }, [selectedSort, posts])

const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
}, [searchQuery, sortedPosts])

    const sortPosts = (sort) =>{
        setSelectedSort(sort);
    }


  return (
    <div className="App">
        <header>
            <a href="">
                Home
            </a>
            <a href="">
                Page1
            </a>
            <a href="">
                Page2
            </a>
            <a href="">
                Page3
            </a>
            <a href="">
                Page4
            </a>
            <a href="">
                Page5
            </a>
            <a href="">
                Support
            </a>
        </header>
        <div className="AppContainer">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <MyInput
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />
        <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultvalue="Order"
            options={[
                {value:'title',name:'by naming'},
                {value:'body',name:'by description'},
            ]}
        />
        {sortedAndSearchedPosts.length !== 0
        ?<Postlist remove={removePost} posts={sortedAndSearchedPosts} title= 'Список постов 1'/>

        :<h1 style={{textAlign:'center' ,marginTop:'200px', fontFamily:'sans-serif', opacity:'0.5'}}>Список постов пуст</h1>
        }
        </div>
    </div>
  );
}

export default App;
