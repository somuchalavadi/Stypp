import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{background:'#080808',color:'#F0EDEA',minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'40px 20px',fontFamily:'sans-serif'}}>
      <a href="/" style={{fontWeight:800,fontSize:'1.5rem',color:'#F0EDEA',textDecoration:'none',marginBottom:'48px'}}>
        Sty<span style={{color:'#F5A623'}}>pp</span>
      </a>
      <div style={{fontSize:'10rem',fontWeight:800,color:'rgba(245,166,35,.12)',lineHeight:1,marginBottom:'8px'}}>404</div>
      <h1 style={{fontSize:'2rem',fontWeight:800,marginBottom:'16px'}}>Page Not Found</h1>
      <p style={{color:'#777',fontSize:'.95rem',maxWidth:'400px',marginBottom:'40px',lineHeight:1.7}}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{display:'flex',gap:'12px',flexWrap:'wrap',justifyContent:'center'}}>
        <Link href="/" style={{background:'#F5A623',color:'#080808',padding:'13px 28px',borderRadius:'4px',textDecoration:'none',fontWeight:500}}>Go Home</Link>
        <Link href="/#contact" style={{border:'1px solid rgba(255,255,255,.1)',color:'#F0EDEA',padding:'13px 28px',borderRadius:'4px',textDecoration:'none'}}>Contact Us</Link>
      </div>
    </div>
  )
}
