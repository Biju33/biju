function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'কৃষ্ণবর্ষ',
                text: 'বৈদিক যাত্রা',
                url: 'https://tekrajkoirala.com.np/indexm.html'
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText('https://tekrajkoirala.com.np/indexm.html')
                .then(() => alert("লিঙ্ক ক্লিপবোর্ডে কপি হয়েছে!"))
                .catch(() => alert("লিঙ্ক কপি করতে ব্যর্থ।"));
        }
    }
