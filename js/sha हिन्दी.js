function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'कृष्णवर्स',
                text: 'वैदिक यात्रा',
                url: 'https://tekrajkoirala.com.np/indexm.html'
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText('https://tekrajkoirala.com.np/indexm.html')
                .then(() => alert("लिंक क्लिपबोर्ड पर कॉपी हो गया!"))
                .catch(() => alert("लिंक कॉपी करने में विफल।"));
        }
    }
