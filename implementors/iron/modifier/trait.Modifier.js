(function() {var implementors = {};
implementors["iron"] = [{text:"impl <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"iron/mime/struct.Mime.html\" title=\"struct iron::mime::Mime\">Mime</a>",synthetic:false,types:["mime::Mime"]},{text:"impl <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"iron/response/trait.WriteBody.html\" title=\"trait iron::response::WriteBody\">WriteBody</a>&gt;",synthetic:false,types:["alloc::boxed::Box"]},{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt; <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"iron/response/struct.BodyReader.html\" title=\"struct iron::response::BodyReader\">BodyReader</a>&lt;R&gt;",synthetic:false,types:["iron::response::BodyReader"]},{text:"impl <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>",synthetic:false,types:["alloc::string::String"]},{text:"impl <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;",synthetic:false,types:["alloc::vec::Vec"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>",synthetic:false,types:[]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>",synthetic:false,types:[]},{text:"impl <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/fs/struct.File.html\" title=\"struct std::fs::File\">File</a>",synthetic:false,types:["std::fs::File"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for &amp;'a <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>",synthetic:false,types:["std::path::Path"]},{text:"impl <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>",synthetic:false,types:["std::path::PathBuf"]},{text:"impl <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"enum\" href=\"iron/status/enum.Status.html\" title=\"enum iron::status::Status\">Status</a>",synthetic:false,types:["hyper::status::StatusCode"]},{text:"impl&lt;H&gt; <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"iron/modifiers/struct.Header.html\" title=\"struct iron::modifiers::Header\">Header</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"iron/headers/trait.Header.html\" title=\"trait iron::headers::Header\">Header</a> + <a class=\"trait\" href=\"iron/headers/trait.HeaderFormat.html\" title=\"trait iron::headers::HeaderFormat\">HeaderFormat</a>,&nbsp;</span>",synthetic:false,types:["iron::modifiers::Header"]},{text:"impl&lt;'a, 'b, H&gt; <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/request/struct.Request.html\" title=\"struct iron::request::Request\">Request</a>&lt;'a, 'b&gt;&gt; for <a class=\"struct\" href=\"iron/modifiers/struct.Header.html\" title=\"struct iron::modifiers::Header\">Header</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"iron/headers/trait.Header.html\" title=\"trait iron::headers::Header\">Header</a> + <a class=\"trait\" href=\"iron/headers/trait.HeaderFormat.html\" title=\"trait iron::headers::HeaderFormat\">HeaderFormat</a>,&nbsp;</span>",synthetic:false,types:["iron::modifiers::Header"]},{text:"impl <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"iron/modifiers/struct.Redirect.html\" title=\"struct iron::modifiers::Redirect\">Redirect</a>",synthetic:false,types:["iron::modifiers::Redirect"]},{text:"impl <a class=\"trait\" href=\"iron/modifier/trait.Modifier.html\" title=\"trait iron::modifier::Modifier\">Modifier</a>&lt;<a class=\"struct\" href=\"iron/response/struct.Response.html\" title=\"struct iron::response::Response\">Response</a>&gt; for <a class=\"struct\" href=\"iron/modifiers/struct.RedirectRaw.html\" title=\"struct iron::modifiers::RedirectRaw\">RedirectRaw</a>",synthetic:false,types:["iron::modifiers::RedirectRaw"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
