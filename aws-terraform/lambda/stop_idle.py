import boto3

def lambda_handler(event, context):
    ec2 = boto3.client('ec2')

    # Stop all running EC2 instances
    running = ec2.describe_instances(Filters=[
        {'Name': 'instance-state-name', 'Values': ['running']}
    ])
    
    ids = [i['InstanceId'] for r in running['Reservations'] for i in r['Instances']]
    if ids:
        print(f"Stopping instances: {ids}")
        ec2.stop_instances(InstanceIds=ids)
    else:
        print("No running instances to stop.")
