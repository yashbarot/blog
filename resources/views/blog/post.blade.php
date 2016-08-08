<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{{ config('blog.title') }}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <h1>{{ $post->title }}</h1>
            <h5>{{ $post->published_at->format('M jS Y g:ia') }}</h5>
            <hr>
            {!! nl2br(e($post->content)) !!}
            <hr>
            <button class="btn btn-primary" onclick="history.go(-1)">&laquo; Back</button>
        </div>
    </body>
</html>