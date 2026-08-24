function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'krishnaverse',
                text: 'vedic journey',
                url: 'https://tekrajkoirala.com.np/indexm.html'
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText('https://tekrajkoirala.com.np/indexm.html')
                .then(() => alert("Link copied to clipboard!"))
                .catch(() => alert("Failed to copy link."));
        }
    }
