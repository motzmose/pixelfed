@extends('layouts.app')

@section('content')

<div class="container">
	<div class="col-12 col-md-8 offset-md-2 pt-4">

		<div class="card shadow-none border">
			<div class="card-header bg-white font-weight-bold d-flex justify-content-between align-items-center">
				<span>Edit Status</span>
				<a class="btn btn-outline-primary btn-sm font-weight-bold" href="{{$status->url()}}">Back to post</a>
			</div>
			<div class="card-body">
				<form method="post">
					@csrf
					<div class="form-group">
						<label class="font-weight-bold text-muted small">License</label>
						<select class="form-control" name="license">
							@foreach($licenses as $license)
							<option value="{{$license['id']}}" {{$status->firstMedia()->license == $license['id'] ? 'selected' : ''}}>{{$license['title']}}</option>
							@endforeach
						</select>
						<label class="font-weight-bold text-muted small">Caption</label>
						<textarea class="form-control" name="caption">{{$status->rendered}}</textarea>
						<label class="font-weight-bold text-muted small">Public/Private</label>
						<select class="form-control" name="visibility">
							<option value="public" {{$status->visibility == 'public' ? 'selected' : ''}}>Public</option>
							<option value="unlisted" {{$status->visibility == 'unlisted' ? 'selected' : ''}}>Unlisted</option>
							<option value="private" {{$status->visibility == 'private' ? 'selected' : ''}}>Private</option>
						</select>
					</div>
					<hr>
					<button class="btn btn-primary btn-block font-weight-bold">Save</button>
				</form>
			</div>
		</div>
	</div>
</div>
@endsection
