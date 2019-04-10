
// TODO: Delete this zombie code after eval

// export default class Feed extends Component
// {
// 	constructor(props)
// 	{
// 		super(props);
// 		this.state = {

// 		}
// 	}

// 	componentDidMount()
// 	{
// 		fetch("https://jsonplaceholder.typicode.com/posts",
// 		{
// 			method: 'GET',
// 			headers: {
// 			  Accept: 'application/json',
// 			  'Content-Type': 'application/json',
// 			}
// 		})
// 		.then(response => response.json())
// 		.then(json =>
// 			{
// 				this.setState({
// 					data: json
// 				})
// 			}
// 		)
// 		.catch(err => { console.log(err) })
// 	}

// 	render()
// 	{
// 		const data = this.state.data;

// 		// if data hasn't loaded, display "Loading..."
// 		if (data === null)
// 		{
// 			return(
// 				<View><Text>Loading...</Text></View>
// 			)
// 		}

// 		// else return the view
// 		return(
// 				<FlatList
// 					data = {data}
// 					renderItem = {({item}) =>
// 						<View style={styles.articleContainer}>
// 							<Text style={styles.titleStyle}>{item.id}. {item.title}</Text>
// 							<Text style={styles.textStyle}>{item.body}</Text>
// 						</View>
// 					}
// 					keyExtractor={({id}, index) => id.toString()}
// 					contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignSelf: "stretch"}}
// 				/>
// 		);
// 	}
// }