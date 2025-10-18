// Mobile nav toggle
    const menuBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuBtn && menuBtn.addEventListener('click', ()=>{ nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'; });

    // Reviews slider
    const track = document.getElementById('reviewTrack');
    const prev = document.getElementById('prevReview');
    const next = document.getElementById('nextReview');
    let idx = 0;
    const count = track.children.length;
    function showIndex(i){
      const w = track.children[0].getBoundingClientRect().width + 12; // gap
      track.style.transform = `translateX(${ -i * w }px)`;
    }
    prev.addEventListener('click', ()=>{ idx = (idx - 1 + count) % count; showIndex(idx); });
    next.addEventListener('click', ()=>{ idx = (idx + 1) % count; showIndex(idx); });
    // auto-play
    let autoplay = setInterval(()=>{ idx = (idx + 1) % count; showIndex(idx); }, 5000);
    track.addEventListener('mouseenter', ()=>clearInterval(autoplay));
    track.addEventListener('mouseleave', ()=>autoplay = setInterval(()=>{ idx = (idx + 1) % count; showIndex(idx); }, 5000));

    // Booking modal
    const modal = document.getElementById('modal');
    document.querySelectorAll('.bookBtn').forEach(b=>{
      b.addEventListener('click', (e)=>{
        document.getElementById('modalTitle').textContent = 'Book: ' + e.currentTarget.dataset.dest;
        modal.style.display = 'flex';
      });
    });
    document.getElementById('closeModal').addEventListener('click', ()=> modal.style.display='none');
    document.getElementById('confirmBook').addEventListener('click', ()=>{
      alert('Booking request sent — we will contact you soon.');
      modal.style.display='none';
    });

    // Search button (demo behaviour)
    document.getElementById('searchBtn').addEventListener('click', ()=>{
      const v = document.getElementById('searchInput').value.trim();
      if(!v) return alert('Please type a destination to search.');
      alert('Searching for: ' + v);
    });

    // Keep slider responsive on load/resize
    window.addEventListener('load', ()=> showIndex(0));
    window.addEventListener('resize', ()=> showIndex(idx));