docker build -t craigcliff/multi-client:latest -t craigcliff/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t craigcliff/multi-server:latest -t craigcliff/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t craigcliff/multi-worker:latest -t craigcliff/multi-worker:$SHA -f ./server/Dockerfile ./worker
docker push craigcliff/multi-client:latest
docker push craigcliff/multi-server:latest
docker push craigcliff/multi-worker:latest

docker push craigcliff/multi-client:$SHA
docker push craigcliff/multi-server:$SHA
docker push craigcliff/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=craigcliff/multi-server:$SHA
kubectl set image deployments/client-deployment client=craigcliff/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=craigcliff/multi-worker:$SHA