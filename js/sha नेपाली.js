function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'कृष्णवर्स',
                text: 'वैदिक यात्रा',
                url: 'https://tekrajkoirala.com.np/indexm.html'
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText('https://tekrajkoirala.com.np/indexm.html')
                .then(() => alert("लिङ्क क्लिपबोर्डमा प्रतिलिपि गरियो!"))
                .catch(() => alert("लिङ्क प्रतिलिपि गर्न असफल।"));
        }
    }
