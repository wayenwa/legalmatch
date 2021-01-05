## LegalMatch Full Stack Dev Test

`Prepare by:` Wyenne Malixi

`Email`:	malixiwyenne@gmail.com

`Mobile:`	+63 956-7420-844


### DevOps & Wordpress Part

1. `docker-compose up -d`
2. `make install`

3. `docker exec -it legalmatch-wp-cli wp scaffold post-type review --label=Review --allow-root`
4. Previous step generated the script for creating the "Review" Post Type.
	
	Copy the generated script and paste to the bottom part of functions.php (`wp-content/themes/<your-active-theme>/functions.php`).
5. Open `http://localhost:8080/wp-admin` on the browser.

	Username	-	admin

	Password	-	123
6. Navigate to Settings menu and Permalink.(`http://localhost:8080/wp-admin/options-permalink.php`).
 Choose "Post Name" and Save Changes.
 
	This enables the api route to be accesible.

7. Manually add Review's Custom fields.

	This is to accomodate the metadata for Review Post Type.

	1. Navigate to "Custom Fields" tab from the menu. Press Add New.
	2. Key in Title as "Reviews"
	3. Under Locations section:
		
		Show this field group if    -   Post Type
		
		is equal to                 -   Review


	4. Press "Add Field" button.
	5. Create Fields for:
		<table border="1">
			<tr>
				<th>Label</th>
				<th>Name</th>
				<th>Type</th>
			</tr>
			<tr>
				<td>Name</td>
				<td>name</td>
				<td>Text</th>
			</tr>
			<tr>
				<td>Location</td>
				<td>location</td>
				<td>Text</th>
			</tr>
			<tr>
				<td>Category</td>
				<td>category</td>
				<td>Text</th>
			</tr>
			<tr>
				<td>Rating</td>
				<td>rating</td>
				<td>Number</th>
			</tr>
			<tr>
				<td>Content</td>
				<td>rating</td>
				<td>Text area</th>
			</tr>

		</table>
	
	6. Press Publish button.
8. On the terminal, Move the `sample-data.json` file from the root folder to your current active theme.
 
 	On your terminal, run : 

 	`mv sample-data.json wp-content/themes/<your-active-theme>`

9. Add below script to functions.php to generate Review's sample json data.
```
function programmatically_create_post() {
	global $wpdb;

	$str = file_get_contents('sample-data.json', true);

	$json = json_decode($str, true); //

	
	if ($json) {
		foreach ($json as $slice) {
		   $title = $slice['name'];

	 	   // Create post object
			$my_post = array(
				'post_type'		=> 'review',
				'post_title'    =>  $title,
				'post_status'	=> 'publish',
			);

			$return = $wpdb->get_row( "SELECT ID FROM wp_posts WHERE post_title = '" . $title . "' && post_status = 'publish' && post_type = 'review' ", 'ARRAY_N' );
			if( empty( $return ) ) {
				$id = wp_insert_post( $my_post, true );
				update_post_meta($id, 'name', $slice['name']);
				update_post_meta($id, 'location', $slice['location']);
				update_post_meta($id, 'category', $slice['category']);
				update_post_meta($id, 'rating', $slice['rating']);
				update_post_meta($id, 'content', $slice['content']);
			}
	   }
	 }

}
add_filter( 'after_setup_theme', 'programmatically_create_post' );
```
On Postman,
Send a GET Request on this url :  `http://localhost:8080/wp-json/wp/v2/review`. And it should populate the Reviews data from the sample-data.json file.


### FrontEnd
#### React-Static

1. Install the CLI tool.
	`npm i -g react-static`

2. Run `npm start`








