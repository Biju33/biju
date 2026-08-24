function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'کرشنورس',
                text: 'ویدک سفر',
                url: 'https://tekrajkoirala.com.np/indexm.html'
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText('https://tekrajkoirala.com.np/indexm.html')
                .then(() => alert("لنک کلپ بورڈ پر کاپی ہو گیا!"))
                .catch(() => alert("لنک کاپی کرنے میں ناکام۔"));
        }
    }
