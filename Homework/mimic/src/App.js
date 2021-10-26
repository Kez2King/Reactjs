import './App.css';
import './Components/card'
import More from './Components/buttons'
import Cards from './Components/card';

function App() {
  return (
    <div className="App">
      <div className="Card">
        <Cards src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_M365_HomePage_1920x800:VP1-539x400"
        title="Microsoft 365" description="Hear Microsoft leadership reveal innovations that are shaping the business environments of the future at this Nov 2-4 digital event."/>
        
        <div className="mB">
          <More name="For up to 6 people"/>
          <More name="For 1 person"/>
        </div>
      </div>
      
      <div className="Card">
        <Cards src="https://cdn.vox-cdn.com/thumbor/yX5t7viLS3uik__I6ZNu34UZ1Mc=/0x0:2085x1040/1200x800/filters:focal(879x324:1211x656)/cdn.vox-cdn.com/uploads/chorus_image/image/65363409/6Krbuy0.0.jpg"
        title="Xbox Game Pass Ultimate" description="Hear Microsoft leadership reveal innovations that are shaping the business environments of the future at this Nov 2-4 digital event."/>
        
        <div className="mB">
          <More name="Join Now"/>
          <More name=" Compare all plans"/>
        </div>
      </div>
      
      <div className="Card">
        <Cards src="https://thumbs.dreamstime.com/z/new-microsoft-windows-logo-computer-screen-chiang-mai-thailand-july-225423026.jpg"
        title="Made for great minds, with heart" description="Hear Microsoft leadership reveal innovations that are shaping the business environments of the future at this Nov 2-4 digital event."/>
        
        <div className="mB">
          <More name="Shop Windows 11 devices"/>
        </div>
      </div>

      <div className="Card">
        <Cards src="https://www.cnet.com/a/img/C2Fd1cExpw_XaFpubLBJ248Uk58=/940x0/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg"
        title="Up to $150 off surface Laptop Go" description="Hear Microsoft leadership reveal innovations that are shaping the business environments of the future at this Nov 2-4 digital event."/>
        
        <div className="mB">
          <More name="Shop now"/>
        </div>
      </div>
    </div>
  );
}

export default App;
