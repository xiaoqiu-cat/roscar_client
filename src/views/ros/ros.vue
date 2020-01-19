<template>

  <div  
        
        :class="flag ? 'ros_container sidebar-open':'ros_container no-sidebar' " 
        style="position:relative;"
       
    >
        <div class="nav-wrapper">
            <div class="navbar">
                <div class="sidebar-button" @click="handleSideBar">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg></div>
                <div class="logo" @click="handleLogo">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEgAhgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooJx1oAKKrm/s1fY13AH/ALpkGanBDDIII9RQAtFFFABRRRQAUVBLe2sDbZbmGM+juBUscscq7o3V19VORQA6iiigAooooAKKiluYIBmaaOMersB/OiK5gnGYZo5B/sMD/KgCWiiigAooooAKKKKACimSypBC80jbURSzH0A5Nc5/wsDwx/0FI/yNNJvYVzpqK5n/AIWD4Y/6Ckf5Gj/hYPhj/oKR/kafLLsF0dNRXM/8LB8Mf9BSP8jR/wALB8Mf9BSP8jRyy7BdHTUVzP8AwsHwx/0FI/yNH/CwfDH/AEFI/wAjRyy7BdHTUVzaePfDMjYGqwj/AHsitK08QaRfHFrqVtIfQSDNLlaC6NKigEEZBzRSGFFFFABRRRQAUUUUAFFFFABRVe7vrWwhMt3cRQxjqzsBXJ6h8UPDtlIUillumHeJePzNNRb2E2kdpRXmU3xis1P7nS5mH+1IBTU+MdsT8+kyAe0oP9Kr2cuwudHp9FcHafFjQZ3VZ47i3z3ZcgflXWadrmmasm6xvYZvZW5H4UnFrdDTTNCiiipGFFFFABRRRQAUUUUAFFFMkljhQvI6oo5LMcAUAPorldT+IfhzTCVN558g/hgG79awJ/jDpyn9xp1w/uzBatQk+guZHpNFeXD4xw550h8f9dh/hVyD4v6S+BPZXMfuMNR7OXYXOj0Wiud0zxx4e1UqsOoRpIf4JfkP610KsrqGVgQehBqWmtyk7i0UUUgCiiigBsjrFG0jsFRRkk9hXh3jL4gX2s3klrYTNb6ehwNhw0vuT6e1em+P7qS08F6g8RIZlCZHYE4NfPNb0Yp6sznLoPMjltxdi3qTzXT+F/HOp+HrtA8z3FkTh4ZGzgeqnsa5akrdpNWZknY+pbK8h1Cyhu7dw8MyB1I9DU9cN8KLh5vB/luSRFO6rn04P9a7muKSs7HQndXCvLviF4+ns7mTRtJfy5FGJ7gdQf7q/wCNenTMUhkcdVUn9K+Xr6d7nULmeQkvJKzHPua0pRTd2TN2Qya5nnkLzTSSOeSWYk1o6P4j1XQ7pJrK7kUA8xscqw9CKyaWuqyZjc+kPCviODxNoyXkQ2Sqdk0f9xv8K268f+Dt1INV1C1BPlNCHI9wcf1r2CuOceWVjeLugri/H3jX/hGrVLWz2tqM65XPIjX+8f6V2lfPPxBuZLnxtqJkJPlsI19gBTpRUpahN2RiXupXuozNNeXUszsckuxNLZanfadMstndSwupyCjEVTozXXYwPefAXjP/AISa0e2uwq38ABYjpIv94f1rs6+e/h5cyW/jfT9hOJCyMB3BU/4V9CVyVYqMtDeDugooorMoKKKKAKWsf8gS/wD+veT/ANBNfMR6mvp3WP8AkCX/AP17yf8AoJr5hPU/WuihszKoFFJRW5kLRSUZoAWikozQMWlDFSCpII7g02jNAjoNH8Z67osim3vneMdYpjvU/n0/CvV/C3xG0/XnW1ulFnenorH5H+h/pXhGaVWKMGUkEcgjtUSpqRak0fVdFedfDfxq2qxDR9RfN3Ev7qQnmRfQ+4r0WuWUXF2ZsndXCiiipGFFFIzKiFmIVQMknsKAEd0jQu7BVUZLE4ArzTxV8U47VpLPQ1WWUcNcuPlU/wCyO9c/498eS6xcSabpspXT0OGdeDMf8K4CuinS6yMpT7Fy/wBVv9UmM19dSzuTn524/AdBVSkorczuLRT44ZZR+7id/wDdUmh4JohmSGRB6spFADKkhuJraQSQSvE46MjEGoqM0CPRfDPxTvbFkttZU3Vv084f6xR/WvXbDULTVLNLqynSaFxkMp/n6Gvl2uh8K+LLzwxfiSIl7Zz+9hJ4Yeo96xnST1RpGdtz6Loqnpep2ur6dDfWcgeGUZBHY+h96uVzGwUUUUAFFFcv448Ur4Z0fdFg3k+VhU9vVj9KaTbshN2I/Fvjux8Mp5CAXN+w4hU8L7se30rxnW/FWr6/Mz3t0+w9IkO1FH0/xrKuLia6uJJ55GklkO5mY5JNRV1wpqJjKTYtFJUkdvPMMxQyOP8AZQmrJGUVObG7Uc2s4H/XM1AQVOGBBHY0AFb+h+M9a0GRTbXTSQ94ZTuUj+n4Vz9GaTSe4J9j33wt8QNN8RYgkxaXv/PJ24b/AHT3+ldfXyqjtG4dGKsDkEHBFew/Dfxre6tL/ZF/HJM8aZS5AzgDs/8AjXPUpW1RrGd9Gek0UUViaGdr2lrrOh3enscedGQp9D2r5rvbOfT7yW1uUKTRMVZTX1LXNeJvBGleJ8STq0N0BgTxdce471rTny6Micb7HzxTo43mkWONSzscKo6k16c/wZuPPwmsx+VnqYDu/LdXW+Gvh3pPh6Zbklru7X7ssqgBfoO1bOrFLQzUGXvBOiPoHhe2tJf9e2ZZR6M3b8OK6GiiuVu7ubpWEIDAg9DxXzn4y0ObQfEdzA6N5MjmSF8cMpOf06V9G1ma5oGn+IbL7LqEIdRyjjhkPqDV058rJlG6PmajNeqXfwabzc2WsDyz/DNDyPxB5/KtbRPhNplhMk+oXL3zryI9mxM/TJJrd1YmXIyL4TaDLY6bcapcRlGusLED12Dv+Jr0ekRFjRURQqqMAAcAUtc0pczubJWVgrxT4q6BNZ65/a0cZNtdAbmH8LjqD9Riva6r31jbalZyWl5CssEgwysKcJcruKSuj5bor1zU/g7byytJpupNCpORFLHuA/EEUumfB22ilWTUtSaZQcmOGPaD+JJro9rEy5GYnwp0GW81s6tIpFvaghGxwzkY/QGvaqr2NjbabZx2lpCsUEYwqqKsVzTlzO5tFWQUUUVIwooooApax/yBL/8A695P/QTXzC3U19Pax/yBL/8A695P/QTXzAfvGuihszKoJmvYvhdpGm33hmWW7sLWeQXDDdLErHGB3Irx2vbvhH/yKk3/AF8t/IVdX4SYbnV/8I3of/QHsP8AwHT/AAo/4RvQ/wDoD2H/AIDp/hWpRXLdm1kZf/CN6H/0B7D/AMB0/wAKP+Eb0P8A6A9h/wCA6f4VqUUXYWMebwp4fnXbJo1jj2gUH9BXKa78KNLu43k0p2tJ8ZCElkJ/HkV6HRTU5LZg4pnzBqmlXmjX8lnfRGOZD0PQj1HtVKvc/if4fi1Pw4+oIgF1ZfOGA5ZO4/r+FeF11QlzK5hKNmWbC9m06+gvLdissLh1IPpX0xpN+mqaTa30f3Zow/0Pevl6vc/hRem58ImBmybeZlHsDgj+tRWWlyqb1sd1RRRXMbBXmXxS8WG1hGhWb4llGbhgei/3fxr0LVNQi0rS7m+mI2QRlznv6CvmfU9Qn1XUri+uGzLM5dvbPatqUbu5E5WVitRSVteF/Ds/iXWYrGI7Y/vTSf3E7n6+ldLdtWYrUf4b8K6j4muvLtE2wqf3kz/dX/E169onw10LSlVp4Bez93nGVB9l6V02l6XaaNp8VlZxCOKMY46k+p96uVyTqN7G0YJEUVrbwIEigjRR0CqABSvbwyqVkiRlPUMoNSUVmWcnrPw80DV1ZltVtJzyJLcbefcdDXkninwVqPhiUvIPOsycLOo4+h9DX0PUN3aQX1rJbXMSywyDayMMgitI1HEiUEz5YozXUeN/CUnhjVcRgtYzZaF/T/ZPvXL11Jp6oxatodz8N/FR0TVxYXLn7DdttOTxG/Y/j0r3QHIyK+UgSCCDgjoa+hfAOvHXvDEMkpzcQfupfcjofxFYVo/aNKcuh1FFFFYGoV88+PtZfWPFl227MNu3kxDsAvX9c19AXUnlWk0n91Cf0r5akdpZWkc5ZiWJ9zW9BatmdR9BKt6bp1zq2oQ2VpGXmlbCj+tU69U+DunxtJqGoOgMiYiQ+meTW05cquZxV3Y6Pw78NdH0mJJL2Jb67wCzSDKA+y9K7KO3hhQJFDGijoFUACpKK43Jvc3SS2G7F/uj8qo3+haVqaFbzT7eYerRjI/GtCilcZ5pr3wls50ebRpjBL1EMhyp9georyrUtLvdIu2tb63eGVezDr7ivqCsbxF4asPEtgba8TDj/VzKPmQ+o/wraFVrciUF0Pn7Q9DvPEGpJZ2cZZj95+yD1NfQPhrw3Z+GtMW1tVBduZZSOXak8N+GbHwxp4trQFnbmSZh8zn/AD2rapVKnNotgjGwUUUVkWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBS1j/kCX/wD17yf+gmvl8/eP1r6g1j/kCX//AF7Sf+gmvl4n5j9a6KGzMqgV7f8ACL/kVJv+vlv5CvD69w+EX/Ipzf8AXy38hVVvhJp7nf0UUVym4UUUUAFFFFAFLWIln0W+icZVrdwf++TXy+eCRX0r4qvl07wtqVyxxtgZR9SMD+dfNGa6KGzMqgtevfBlybDVU7CRD+hryDNe0fB22MegXtwRxLOFH/AR/wDXq6vwkw3PR6KKK5Dc85+Lurm10O30yM/Ndybn/wBxef54/KvF67n4r3zXHi7yM5W3hVQPc8muFzXZTVoowm7sWvevhpoC6R4bS6kTF1efvHJ6hf4R/X8a8V0LTzquu2ViOk0qqfp3r6bijWGJIkGFRQoHsKzrS0sVTXUfRRRXOahRRRQAUUUUAYfi3QY/EPh+4syB5wUvCx7OOlfN8iNFI8bjDqSrD0Ir6sr56+Iml/2X4yvFRNsU+J0/4F1/XNb0ZdDKoupy1eh/CTV/suvzae7EJdR5Udt45/lmvO61vDN9/Z3iXTrrOAk65+hOD/Otpq8WiIuzPpmigcjNFcR0FbUE36dcp/eiYfpXy1X1awDKQehGK+Y9fsG0vX76yYY8qZgPpnj9K6KD3RlUM6vU/g7qUSTX2nO4EsmJYwf4sda8rqezvLiwu4rq1laKaJtyOp5BrWceZWITs7n1RRXm/hn4q2V5ElvrQFtcDgzAfI3v7V6Hb3MF3EstvMksbDIZGyDXJKLjubpp7EtFFFSMKKKKACiiigAooooAK8y8ZfFA6fcy6doqI8yHbJcPyqn0Udz711/jPU5NI8J393EcSiPah9CeK+bSxZiWJJPJJ71tSgnqzOcraI6NvHnidpN51efPoAMfliuw8KfFW4+0R2evBXjY7RdKMFf94dPxryvNFbunF9DNSaPrBGV0V0IZWGQR0Ipa434Y6nLqXg6ETuXe3kaHJ67RyP512VcclZ2N07q4VyPjTx1a+FYlhjRbi/kGVizwo9WrrWO1Sx7DNfMniPUZdU8RX13M24tMwHsoOAPyq6UOZ6kzlZGpd/EPxPdzNJ/aTxAnISJQoFaeh/FPW9OuANQYX1sT8wYAOo9iP61wdFdXJG1rGXMz6j0jVrTW9Nhv7KQPDIPxU9wfer1eP/BvU5Fvr/TGJMbRiZR6EHB/mK9grjnHllY3i7q4VgeK/FVp4V00XE48yeTIhhBwXP8AQe9b9fPvxL1KS/8AGl1GxOy1AhQegAyf1NOnHmYpOyGan8RPEeo3Dut81tGT8sUA2hR9epo0z4i+I9OnV2vmuowfmjnG4EfXrXKUma6+SO1jG7PpPwr4qs/FWnG4tx5c0Z2zQseVP9R71vV8/wDwy1KWx8Z20Kt+7ugYnHrwSP5V9AVy1I8srI2i7oKKKKzKCiiigClrP/IDv/8Ar2k/9BNfLp6n619Q6z/yA7//AK9pP/QTXy6Tya6KGzMqgV7h8If+RTm/6+W/kK8OzXYeF/iDeeF9Meyt7OGZGkMm52IOT9K0qRco2RMHZ6n0DRXjP/C5dT/6Blr/AN9NR/wubU/+gZa/99NWHsZGnOj2aivGf+Fy6n/0DLX/AL6aj/hcup/9Ay1/76aj2Mw50ezU2SRIkZ5GVUUZLMcAV4tN8YtZdSIrK0jPrya5bWPGGua4Nt7fOYv+eafKv5CmqMuoOojqfiV42j1lxpOnSbrOJt0sg6SMOgHsK86pKM10RioqyMW7u4tfRvgXS/7I8I2UDDEjr5r59W5/livH/h/4YfxDryPIh+xWxDyt2J7L+NfQQAVQAMAcAVjXl9k0prqLRRQeAa5zU+a/GN0bzxfqcpOf35Ufhx/SsOr2uPv17UG9bmT/ANCNUK71scz3O1+F1qLnxpC5GRDG0n49P6175XifweGfE123pbH/ANCFe2Vy1viNqewUUUVkWFFFFABRRRQAV5J8ZrYCfTLoDkq8ZP0OR/M163XmvxkjB0Kwk7rOR+laUvjRM9jxmlRirqw6g5ptFdhzn1VZTC4sLecdJIlcfiM1PWV4YfzPCmkOepsof/QBWrXA9zqQV5b8VfCclyBr1lGWdF23KKOSB0avUqRlV1KsAykYIPenGTi7iaurHyhRXrfjD4WGaSS/0EAMx3Pak4B/3T/SvKrq0ubGdoLqCSGVTgq6kGuuMlLYwcWiGr+na3qWkSB7C9mgPorcfl0rPoqrCPR9J+L+qWqrHqVpFdqOrqdj/wCH8q7fSvif4d1JljlmezkPadePzFeA5orN0ospTaPqyC5guohLbzRyxnoyMGB/Kpa+XdO1rUtJlEljeTQsDnCtwfw6V6LoHxekTZDrduHXoZ4RyPcr/hWUqLWxaqJ7nrtFVNO1Sy1e0W6sLmOeJh1Q9Pr6GrdYmgUUUUAYXjHS31jwpf2cQzK0e5B6kcivmtlKMVYEMDgg9q+sa808ZfC8ardSajo0iQ3DndJBJwrn1B7GtqU1HRmc431R4xS10j+APFCTeV/ZMpOcZDKR+ea7Pwp8J5Y7iO8150whDLbRnOT/ALR/oK3c4pbmai2dT8MtLm0zwdD56FJLh2m2nqFPT9BXY0iqqKFUAKBgAdhS1xyd3c3SsrCMNylT0IxXzH4l06XSfEd9aTLgrKxHupOQfyr6drk/Gfga08VwrKrC3v41wk2OGHo3tV0pqL1JnG6Pnmiuqvvhz4nspzGNPM654khYMD/WtXQvhTrN/Mj6ltsbbPzAkM5HsBwPxrpc42vcy5Wanwb0yRry+1RgRGqCFT6knJ/kK9fqnpWl2mjadDY2UYjhiGAO5Pcn3q5XJOXM7m8VZWCvAfifpUmn+MJ5yp8q7AlRu2ehH6V79WP4j8OWPibTDZ3ikEHdHIv3kb1FOnLldxSV0fMuaK7jVfhV4hsZj9kSO9hz8rRsFbHuD/TNGk/CrxDfTD7WkdlDnlpGDNj2A/rXVzx3uY8rG/C7Spb/AMXw3QX9zZqZHbtkggD9f0r3ysfw54csfDOmizslJJO6SVvvO3qf8K2K5akuZ3NoxsgoooqCgooooAo6z/yA9Q/69pP/AEE18uE8mvqPWf8AkB6h/wBe0n/oJr5bP3jXTQ2ZlUDNGaTNbek+Etc1y1Nzp1i08IbaWDqOfxNbXS3M7GNSV1P/AArnxX/0Cm/7+p/jR/wrnxX/ANApv+/qf40uaPcfKzlqK6n/AIVz4r/6BLf9/U/xrm7q1nsrqW2uYzHNE210PUGmmnsKzRFRSZqeziinvIYZpfKjdwrSYztB74piIa6bwt4J1PxNcqUjaCzB+edxx+Hqa9R0T4W6BYFLi4L6g+AV8w4T64HWu4jijhjEcSKiKMBVGAKwlW/lNY0+5R0TRbPQNLisLKPbGg5Pdj3J960aKK5tzUKQ9DS0UAfLmtrs17UF9LmT/wBCNUK2fF1u1r4t1SFh0uGP58/1rFzXetjme56N8HXH/CTXa+tsf/QhXtteAfCy8Ft41gQnAnjaP8ev9K9/rlrfEbU9gooorIsKKKKACiiigArzb4yOBoNinc3BP6V6TXkvxouedLtQf78hH5D/ABrSl8SJn8J5PnmjNJTlBZ1UdScV2HOfTnhhDH4U0hD1FlD/AOgCtWoLKEW1hbwDpHEqD8ABU9cD3OpBRRRSAKz9U0PTNahMWoWcU64wCy8j6HqK0KKL2A8t1f4O27kvpN80R/55z/MPz61weq+BfEOkFjNYPJEv/LSH5h+nNfR1HWtY1pIhwTPk90eNtrqVYdmGDSV9Oan4b0fWEK32nwSn+9tw35jmuD1n4O2sqvJpF68L9RFP8y/mOR+taxrRe5DpvoePZorX1vwvq/h6UrqFo6JnAlXlG+hrHzWqaexFjV0PxBqHh6+W6sJ2Qg/OmflcehFe/wDhPxTa+KdLFxD8k6YE0JPKH/Cvmut7wf4gl8O+Ire7VyIWIjmXPDIf8OtRUhzLzKjKx9K0U2N1ljWRCCrAEEdxRXGbjqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCjrX/ACA9Q/69pP8A0E18tH7x+tfUutf8gLUP+vaT/wBBNfLLfeP1rpobMyqBXufwf/5FKb/r5b+Qrwuvc/g//wAilN/18t/IVVb4Sae56FRRRXIbhXjfxd8Oi2vIdct0wk58ufH9/sfy/lXslZ2vaTDrmiXWnTgFZkIBI+63UH8DirhLllcmSuj5cozU97aS2F9NaTqVlhcowPqKr12nOe+/DDxD/bHhwWkzg3NlhCCeSnY/0ruK+bfA+vnw74ntrpnK28n7qcf7B/wODX0irB1DKcgjINclWPLI3g7oWiiisiwooooA8C+K1mbXxpJLtwtxErg+p6H+VcRXsnxk0lptMstVjXP2dzFJ9G6H8x+teNZrtpu8Uc81ZmjoWonStdsr4f8ALGVWP0zzX1DDKs8KSoco6hgfY18m1778MPEK6v4aWzkfN1ZfIwJ5K/wn+n4VnXjpcum+h3FFFFcxqFFFFABRRRQAV8/fFDVP7R8Z3ESsGjtFWBcHuOT+pNe2+IdZh0HQ7rUJiP3SHYufvN2H518x3Nw91cy3EpzJK5dj7k5rehHW5nUfQZWr4Ysv7R8T6da4yHnXP0ByayM16N8INI+1+IJtRkXMdpHhT23tx/LNbzdotmcVdnt4GBiiiiuE6AooooAKKKKACiiigAooooAhubWC8t3guYklicYZXGQa8L+IfglfDVwl7Y5NhO2Np/5Zt6fSveq5j4hW0dz4G1MSAHZH5i+xByK0pycZEyV0fOVFJmjNdhzn0j4Cvjf+C9OlY5ZY/LY+68UVmfCkk+CYc/8APV8fnRXDPSTOmOx29cb4s+Ium+GZGtUQ3l8BzEjYCf7x7fStzxNq39h+Hb3UAMtFGdg9W7V8x3FzLdXMlxO5eWRizMepJrSlT5tWTOVtj0FvjJr5l3LZ6eE/ulHJ/PdXZeFfijp+uTx2d/D9iu34U7sxufY9vpXg9KrlWDKSGByCO1bOlFozU2fW1Fct8Ptcl17wjbTznM8RMMh/vFeh/LFdTXI1Z2Nk7hWH4l8V6Z4WtFmvpCZHz5cKcu//ANatp3EcbO3RQSa+YvFOtTa94hu72VyVLlYxnhUHTFXThzMU5WR2938aNTadjZ6Zaxw54EpZ2/MEVteH/jBaXkyW+sWn2R2OBNG25PxHUfrXi1FdDpRtsZc7PrWN0ljWSNgyMMqwPBFOrzX4P67NfaTc6XcSF2tCGiJ6hD2/OvSq5ZR5XY2TurhVXUdStNJsZLy9mWGCMZZmq1Xh3xc1+a719dJjkItrVQWUfxSHnJ/DFOEeZ2FJ2VzU1f4zuJimkachjB/1tyx+b/gIxj86bpXxnn88LqumxmI/x2zEFfwOc/nXk9FdPsoW2Mudn1VpWrWWtafHe2E6ywv3HUH0Poau14L8Ktel07xMmnMxNtegqVJ4DgZB/TFe9VzThyuxrGV0FFFFQUFFFFAFHWv+QFqH/XtJ/wCgmvlgnk/WvqfWv+QFqH/XtJ/6Ca+V2PzH610UOplUDNe6fB7/AJFKb/r5b+QrwrNe6/B3/kUZv+vlv5CrrfCTT3PQqKKK5DcKKKKAPG/i/wCHfIvIdct0Oyb93PjoG7H8a8t719S69pMOuaLdafMoKyoQCezdj+dfMF9aTaffz2c6lZYJDG4PqDiuqjK6sY1FZ3Ia99+F/iL+2fDi2kz7rqywjZPLL2P9K8Bro/A/iE+HPE1vcu2LeQ+XN/unv+FVUjzRJi7M+lKKRWV0V0YMrDII6EUtcZ0BRRRQBna9pUet6FeadIBiaMhc9m6g/nivmC8tZrG8mtbhCk0LlHU9iK+sK8g+LXhNll/4SC0TKNhblQOh7NW1GVnZmdRXVzyitrwv4iuPDOtw38PzIPlmjz99D1H19KxKK6WrqzMkfVOk6taa1p0V9ZSiSGQduoPofer1fM3hjxbqPha8820fdCx/eQP91h/Q17RoHxJ0DW1VJLlbK5I5juDtGfZuhrlnScdjaM0zsaKakscqho3V1PQqc0pIAySAPesixaa7rGjO7BUUZLE4AFYmteMdC0KJjeX8RkH/ACxjYM5/AV474x+I974jDWdoGtdP7qD80n1Pp7VcabkTKSQ/4jeM/wDhItQFlZP/AMS+3PB/56N6/T0rhaSiuyMVFWRg3d3FUEsABkngCvoz4f6AdA8LwRyjFzP++l9ieg/AV5b8MvCba5rI1C5Q/YLRtxyOJH7D8Opr3wDAwKwrS+yjSnHqFFFFc5qFcV468eW/hm2a0tSsupyL8qdRGD3b/Ck8f+OU8MWwtLUb9RmXKZHyoP7x/wAK8Dubqa8uZLi5laWaQ7mdjkk1tTp31ZnOdtEeveBficLgjTtfmCyk/uro8Bs9m9PrXqasGUMpBB5BHevknNdj4Y+I2r+HdsEh+12Q48qQ8r9DVzo31iKM+jPoaiuQ0X4k+HdYCo12LOY/8s7k7OfY9DXWRTRTIHikR1PQqwIrnaa3NE0x9FFMeWOJS0jqgHUscUhj64P4sawlh4TayVh5144QDvtByT+mPxq74g+I+g6JGyx3KXlzjiK3YNz7kcCvDvEXiK98S6o97eN7Rxjoi+granTbd2ZzkrWMmikzV3SNOk1fV7WwiUl55AvHYdz+VdRifQHw6tDaeB9PDDBkUyf99HNFdHZ2sdlZQ2sQxHEgRR7AUVwN3dzpSsjA+IFjLqHgrUYYQWdU8wAd9pzXzb7V9bsodSrAFSMEHvXiPjb4Y3tleS3+iwm4tJGLNAg+eL6DuK2ozS0ZFSN9TzajNTtYXiS+W1pOHzjaYzmuy8JfDXVNbuUmv4Xs7BSCxkGGcegH9TXQ5JK7Mkmz0T4S2clt4LWSRSvnzu6g+nAz+hru6itraKztYraBAkUShEUdgKlrhk7u50JWViK6jM1pNEOroVH4ivlK7t3tLya3kBDxOUOfUHFfWVeV/ET4cz6hcyazoyb535nthwWP95ff1Fa0ZpOzJnG6PGqKsz6feW0pintZo3U4KshBrX0DwZrXiG6SO2tHjhJ+aeVSqKP6/hXS2lqY2O4+ClnIbnVL3B8sIkQPqck17DWR4b8P2vhrRYdPtRnb80khHLsepNa9cc5c0rm8VZWCvnf4nWclp46vWcHbOFlQ+oIx/MGvoiuR8d+Co/Fmno0LLFqEAPlSHow/un2p0pKMtQmro+daM1o6loGraRcGC9sZomB67cg/Qjg03T9D1TVLgQWVjPM59EOB9T0Fdd1uYWNj4e2cl74301YwcRuZGI7AA19I1xXw/wDAw8K2j3F2yyajOAHK9I1/uj+prta5KslKWhtBWQUUUVmWFFFFAFHWv+QFqH/XtJ/6Ca+VW+8frX1VrX/IC1D/AK9pP/QTXyq33j9a6aHUyqCV7t8Hf+RRm/6+W/kK8Ir3f4Of8ijN/wBfLfyFVW+Emnueh0UUVyG4UUUUAFeNfGHw6Yb2HXYE+SYCKfA6MOhP1HH4V7LWbr2kxa5ol1p0w+WZCAfRux/OrhLllcmSuj5ZoBqe/sptOv57O4UrNC5RgfUVWzXac59AfC7xGNZ8NLZzSbruxxG2epT+E/0/Cu6r5q8DeIj4c8TW9yxP2eQ+VMM/wnv+HWvpNHWRFdCGVhkEdxXHVjyyN4O6HUUUVmWFRzwRXUDwTxrJFIpVlYZBFSUUAfPXjvwNceGL1ri1RpNMlbKP18v/AGT/AI1xdfWlzawXlu9vcxJLC4wyOMgivH/FvwlngaS80AmaLqbVj8y/7p7/AErpp1b6SMZQ6o8rpakubW4s5mhuYZIZFOCrqQairczLUGo3tqMW93PEPRJCP5U+TV9SlXbJqF049GmY/wBapZozRYYuSSSetFJmnRRSTyBIo2dz0VRkmgQma6Hwl4SvfFWoiGFSlshzNORwo9B710fhX4U6hqhS51fdZWuc+X/y0cf0/GvaNM0uy0exjs7GBYYEGAqjr7k9zWM6qWiNIwvuJpOlWui6bDYWcYSGJcDHc9yfertFFcpsFFFFAGD4r8K2XirTDbXACTLzDMByh/wr561/w9qHhzUXtL6EqQfkkA+Vx6g19R1n6xomn67ZNaahbrNGehPVT6g9q1p1HHToRKFz5XzijNei+J/hNqWml7jSGN9bZ/1fSRR/WvPZ7ea2lMU8TxODgq6kEV0xkpbGLTW4zNWLfULy0/497qaIf9M5Cv8AKqtLVCNL/hINYx/yFLz/AL/N/jVafUL26GLi7nlHo8hP86rUUrIdwooq7p2kajq9wIdPs5bhz/cXgfU9BTEUxk8DrXtfws8GNp0B1zUIttzMuIEYcoh6n6n+VL4N+FcOmSx3+tslxcr8yQLyiH39T+lemAADAGAK5qlW+iNoQtqwooorA0CiiigBhhjLbjGmfXaKfRRQAUUUUAFFFFAEbwQyHLxRsfVlBp6qqDCqAPQClooAKKKKACiiigBrxxyDDorD0YZpEiji/wBXGqf7oxT6KACiiigAooooAKKKKAI7iBLm2lglGY5UKMAexGDXGn4U+FCc/ZJv+/zV21FNSa2E0mcT/wAKp8Kf8+k3/f5q6LQtA0/w5ZNZ6dGyQs5chmLc/jWpRTcm92FkgoooqRhRRRQAUUUUAcxrHgDw9rmoPfXtq5ncAMySFc4+lUP+FU+FP+fSb/v81dtRVc8u4uVHE/8ACqfCn/PpN/3+auvsrSOws4bWHd5UShF3HJwPep6KTk3uCSQUUUUhhRRRQAUUUUAZ2qaDpesxGPULKGcerLyPxri7/wCDuh3DlrS4uLXP8IO4frXotFUpSWzE4p7nkUnwSO4+XrXH+1D/APXpqfBJ8/PrS4/2Yf8A69ev0VXtZ9xckTzWy+DOjwuGu725uAOqjCA12ek+GNG0NcWFhFE3d8ZY/ia16Klzk92NRSCiiipGFFFFABRRRQAUUUUAFZ2p6DpWsRGO/sYZx6svI/GtGii9gPO7/wCD2g3Ll7Wa4tc/whtw/WseX4JAt+51ogejQ/8A169coq1UkupPJE8fHwSl76yn4Qn/ABq1D8E7Uf6/V5W/3IgP616tRT9rPuHJE4fTvhT4asSGmhku3HeZ+PyFdhaWNrYxCK0t4oUAwFjUCrFFQ5N7jSS2CiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z" alt="">
                </div>
                <div class="search" style="max-width: 960px;">
                    <div class="search-box">
                        <input type="text" placeholder="请输入内容">
                    </div>
                </div>
                <div class="links-wrapper">
                         <div class="links">
                            <nav class="nav-links can-hide" style="max-width: 960px;">
                                <div class="nav-item" @click="handleSideBar">
                                    <router-link to="/" exact>首页</router-link>
                                </div>
                                <div class="nav-item">
                                    <router-link to="/about" exact>指南</router-link>
                                </div>
                                <div class="nav-item">
                                    <router-link to="/fun" >功能</router-link>
                                </div>
                                <div class="nav-item">
                                    <router-link to="/log" >版本日志</router-link>
                                </div>
                                <div class="nav-item">
                                    <a href="https://github.com/xiaoqiu-cat/roscar.git" target='_blank' >GitHub</a>
                                </div>
                            </nav>
                        </div>
                </div>
            </div>
        </div>
        <div 
                v-if='loading'
                v-loading='loading'
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(255, 255, 255, 0.2)"
                class="loading-box"
        >
        </div>
        <div v-else>
                <div class="sidebar-mask"></div>
                <div class="sidebar">
                    <nav class="nav-links">
                        <div class="nav-item" @click="handleSideBar">
                            <router-link to="/" exact>首页</router-link>
                        </div>
                        <div class="nav-item" @click="handleSideBar">
                            <router-link to="/about" exact>指南</router-link>
                        </div>
                        <div class="nav-item" @click="handleSideBar">
                            <router-link to="/fun" >功能</router-link>
                        </div>
                        <div class="nav-item" @click="handleSideBar">
                            <router-link to="/log" >版本日志</router-link>
                        </div>
                        <div class="nav-item">
                            <a href="https://github.com/xiaoqiu-cat/roscar.git" target='_blank' >GitHub
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
                            </a>
                        </div>
                    </nav> 
                </div>
                <div class="page" id="area" >
                    <div class="content"  @click="handleSideBarFalse" >
                        <router-view/>
                    </div>
                </div>
        </div>
       
  </div>
 
</template>

<script>

export default {
  data(){
      return {
          flag : false,
          loading : true
      }
  },
  mounted () {
     setTimeout(() => {
         this.loading = false
     }, 1500);
  },
   
  methods: {
    handleLogo(){
        this.$router.push('/')
    },
    handleSideBar(){
        this.flag = !this.flag
    },
    handleSideBarFalse(){
        this.flag = false
    }
  },
   computed: {
        newyear: function () {
            return (new Date()).getFullYear()
        }
    }  
}
</script>

<style lang="less" scoped>
    
    .ros_container{
        height: 100%;
        background-color: #fff;
        .loading-box{
            width: 100%;
            height: 100%;
            margin-top: 75px;
        }
        .nav-wrapper{
             position: fixed;
             top: 0;
             left: 0;
             z-index: 20;
             height: 4.5rem;
             background-color: #fff;
             box-sizing: border-box;
             border-bottom: 1px solid #eaecef;
             width: 100%;
             .navbar{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    box-shadow: 0 0 5px #eaecef;
                    margin:0 auto;
                   .sidebar-button {
                        display: none;
                        width: 22px;
                        height: 22px;
                        position: absolute;
                        padding: .6rem;
                        top: 15px;
                        left: 20px;
                        color: #45526b;
                    }
                    .logo{
                        height: 100%;
                        padding-left: 100px;
                        overflow: hidden;
                        width: 200px;
                        cursor: pointer;
                        &>img{
                            display: block;
                            height: 40px;
                            width: auto;
                            margin-top: 15px;
                        }
                    }
                    .search {
                        display: inline-block;
                        margin-left: 4.03vw;
                        .search-box {
                            display: inline-block;
                            position: relative;
                            margin-right: 1rem;
                            input {
                                cursor: text;
                                width: 250px;
                                height: 36px;
                                color: #67799d;
                                display: inline-block;
                                border: 1px solid #d1d7de;
                                border-radius: 2rem;
                                font-size: .9rem;
                                line-height: 2rem;
                                padding: 0 .5rem 0 2rem;
                                outline: none;
                                transition: all .2s ease;
                                background: #fff url("http://doc.cms.7yue.pro/assets/img/search.9e8df4f9.svg") .6rem .4rem no-repeat;
                                background-size: 1.4rem;
                            }
                            input::-webkit-input-placeholder{
                                color:#d1d7de;
                                padding-left: 0.4rem;
                            }
                            input:focus {
                                border-color: #3683d6!important;
                            }
                        }
                    }
                    .links-wrapper{
                        display: flex;
                        align-items: center;
                        right: 5rem;
                        text-align: right;
                        .links{
                            padding-left: 2.5rem;
                            margin-right: 100px;
                            box-sizing: border-box;
                            background-color: #fff;
                            font-size: 1rem;
                            .nav-links{
                                display: flex;
                                justify-content: space-between;
                                font-size: 0.8rem;
                                .nav-item{
                                    position: relative;
                                    display: inline-block;
                                    margin-left: 2rem;
                                    line-height: 2rem;
                                    a{
                                        color: #45526b;
                                        &.active{
                                                color:#3683d6;
                                            }
                                    }
                                    a:hover{
                                        color: #3683d6;
                                    }
                                }
                            }
                        }
                        .logout{
                            font-size: 14px;
                            color: #45526b;
                            cursor: pointer;
                        }
                        .logout:hover{
                            color: #3683d6;
                        }
                    }
                }
        }
        .sidebar-mask {
            // position: fixed;
            // top: 0;
            // left: 0;
            // z-index: 9;
            // width: 100vw;
            // height: 100vh;
            // display: none;
            height: 4.5rem;
        }
        .sidebar {
            display: none;
            font-size: 15px;
            background-color: #fff;
            width: 150px;
            z-index: 10;
            position: fixed;
            margin: 0;
            top: 4.5rem;
            left: 0;
            bottom: 0;
            box-sizing: border-box;
            overflow-y: auto;
            .nav-links {
                display: none;
                border-bottom: 1px solid #eaecef;
                border-right: 1px solid #eaecef;
                padding: .5rem 0 .75rem 0;
                 .nav-item{
                    position: relative;
                    margin-left: 2rem;
                    line-height: 3rem;
                    a{
                        color: #45526b;
                        &.active{
                                color:#3683d6;
                            }
                    }
                    a:hover{
                        color: #3683d6;
                    }
                }
            }
        }
        .page{
            height:calc(100% - 9rem);
            .content{
                height: 100%;
                width: 100%;
                background-color: #fff;
            }
        }
       
    }
   
    @media (max-width: 920px) {
        .logo{
            display: none;
        }
        .navbar .can-hide {
            display: none!important;
        }
        .navbar .sidebar-button{
            display: block!important;
        }
        .sidebar {
            display: block!important;
            top: 0;
            transform: translateX(-100%);
            transition: transform 1s ease;
            .nav-links{
                 display: block!important;
            }
        }
        .no-sidebar .sidebar {
            transform: translateX(-100%);
            transition: transform 0.5s ease;
        }
        .sidebar-open .sidebar {
            transform: translateX(0);
            transition: transform 0.5s ease;
        }
        .search-box input {
            left: 15rem;
        }
    }
    @media (max-width: 1060px){
        .sidebar {
            font-size: 15px;
            width: 205px;
        }
        .search-box input {
            cursor: pointer;
            width: 0!important;
            border-color: transparent!important;
            position: relative;
        }
        
    }
     @media (max-width: 419px){
      
        .search-box input:focus {
            left: 10rem;
            width: 10rem!important;
        }
    }

   
</style>
