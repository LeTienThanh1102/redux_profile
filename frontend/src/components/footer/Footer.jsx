import './footer.css'
function Footer(props) {
    const {isOpenPost, setOpen}=props;
    return ( 
        <footer>
            <div className="footer-title" onClick={()=>setOpen(!isOpenPost)}>
                Tạo bài viết
                <span className="footer-icon">+</span>
            </div>
        </footer>
     );
}

export default Footer;